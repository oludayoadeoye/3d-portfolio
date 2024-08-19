import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export function Airship(props) {
    const { nodes, materials } = useGLTF('./models/airship/AirShip.glb')
    const HELIX_SPEED = 9;
    const helix = useRef()
    useFrame((_state, delta) => {
        helix.current.rotation.z += delta * HELIX_SPEED;
    });

    return (
        <group {...props} dispose={null}>
            <mesh
                geometry={nodes.Node.geometry}
                material={materials['Cube.1_2']}
                position={[0, 0.729, -0.01]}
                scale={0.005}
            />
            <group
                ref={helix}

                position={[0, 0.142, -0.635, 0.99]} scale={-0.038}>
                <mesh geometry={nodes['Node-Mesh001'].geometry} material={materials.lambert17SG} />
                <mesh geometry={nodes['Node-Mesh001_1'].geometry} material={materials.lambert18SG} />
                <mesh geometry={nodes['Node-Mesh001_2'].geometry} material={materials.lambert19SG} />
            </group>
        </group>
    )
}

useGLTF.preload('./models/airship/AirShip.glb')
