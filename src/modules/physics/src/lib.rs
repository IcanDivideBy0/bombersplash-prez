extern crate nalgebra as na;
extern crate ncollide3d;
extern crate nphysics3d;
extern crate wasm_bindgen;

use na::{Isometry3, Matrix4, Vector3};
use ncollide3d::shape::{Cuboid, ShapeHandle};
use nphysics3d::math::Velocity;
use nphysics3d::object::{BodyHandle, ColliderHandle, Material};
use nphysics3d::volumetric::Volumetric;
use nphysics3d::world::World;
use std::collections::HashMap;
use wasm_bindgen::prelude::*;

const COLLIDER_MARGIN: f32 = 0.01;

fn slice_to_vec3(slice: &[f32]) -> Vector3<f32> {
    Vector3::new(slice[0], slice[1], slice[2])
}

fn mat4_to_box(mat: Matrix4<f32>) -> Box<[f32]> {
    #[cfg_attr(rustfmt, rustfmt_skip)]
    vec![
        mat[0],  mat[1],  mat[2],  mat[3],
        mat[4],  mat[5],  mat[6],  mat[7],
        mat[8],  mat[9],  mat[10], mat[11],
        mat[12], mat[13], mat[14], mat[15],
    ].into_boxed_slice()
}

#[wasm_bindgen]
pub struct Cube {
    body: BodyHandle,
    collider: ColliderHandle,
}

#[wasm_bindgen]
pub struct PrezWorld {
    world: World<f32>,
    cubes: HashMap<String, Cube>,
}

#[wasm_bindgen]
impl PrezWorld {
    #[wasm_bindgen(constructor)]
    pub fn new() -> PrezWorld {
        let mut world = World::new();
        world.set_gravity(Vector3::y() * -9.81);
        world.set_timestep(1.0 / 60.0);

        PrezWorld {
            world,
            cubes: HashMap::new(),
        }
    }

    pub fn step(&mut self, timestep: f32) {
        self.world.set_timestep(timestep / 1000.0);
        self.world.step();
    }

    #[wasm_bindgen(js_name = addGround)]
    pub fn add_ground(&mut self, size: &[f32], pos: &[f32], rot: &[f32]) {
        let shape_handle = ShapeHandle::new(Cuboid::new(Vector3::new(
            (size[0] / 2.0) - COLLIDER_MARGIN,
            (size[1] / 2.0) - COLLIDER_MARGIN,
            (size[2] / 2.0) - COLLIDER_MARGIN,
        )));

        let pos = Isometry3::new(
            Vector3::new(pos[0], pos[1], pos[2]),
            Vector3::new(rot[0], rot[1], rot[2]),
        );

        self.world.add_collider(
            COLLIDER_MARGIN,
            shape_handle,
            BodyHandle::ground(),
            pos,
            Material::default(),
        );
    }

    #[wasm_bindgen(js_name = addCube)]
    pub fn add_cube(&mut self, id: &str, size: &[f32], pos: &[f32], rot: &[f32], vel: &[f32]) {
        let dim = slice_to_vec3(size) / 2.0;
        let pos = slice_to_vec3(pos);
        let rot = slice_to_vec3(rot);

        let shape_handle = ShapeHandle::new(Cuboid::new(dim));
        let position = Isometry3::new(pos, rot);
        let body_handle = self.world.add_rigid_body(
            position,
            shape_handle.inertia(1.0),
            shape_handle.center_of_mass(),
        );

        {
            let body = self.world.rigid_body_mut(body_handle).unwrap();
            body.set_velocity(Velocity::linear(vel[0], vel[1], vel[2]));
        }

        let collider_handle = self.world.add_collider(
            COLLIDER_MARGIN,
            shape_handle,
            body_handle,
            Isometry3::identity(),
            Material::default(),
        );

        let cube = Cube {
            body: body_handle,
            collider: collider_handle,
        };

        self.cubes.insert(id.to_owned(), cube);
    }

    #[wasm_bindgen(js_name = getCube)]
    pub fn get_cube(&mut self, id: &str) -> Box<[f32]> {
        let cube = self.cubes.get(id).unwrap();
        let body = self.world.rigid_body(cube.body).unwrap();
        let position = body.position();

        let mat = position.to_homogeneous();
        mat4_to_box(mat)
    }
}
