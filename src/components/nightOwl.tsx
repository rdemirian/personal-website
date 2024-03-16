import React, { useRef, useEffect } from "react"
import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/Addons.js"

// Declare renderer variable outside the component
let renderer: THREE.WebGLRenderer

const NightOwl = () => {
	const sceneRef = useRef<HTMLDivElement>(null)
	const previousMousePosition = {
		x: 0,
		y: 0,
	}
	let dragging = false
	let rotationVelocity = 0
	let scene: THREE.Scene
	let camera: THREE.PerspectiveCamera

	useEffect(() => {
		if (!renderer) {
			renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
		}
		camera = new THREE.PerspectiveCamera(
			45,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		)
		scene = new THREE.Scene()
		const loader = new GLTFLoader()

		const mount = sceneRef.current

		if (!mount) return

		renderer.setSize(window.innerWidth, window.innerHeight)
		renderer.shadowMap.enabled = true
		renderer.shadowMap.type = THREE.PCFSoftShadowMap

		const mountElement = mount as HTMLElement

		mountElement.appendChild(renderer.domElement)

		loader.load(
			"/nightOwlVox.gltf",
			(gltf: { scene: THREE.Object3D<THREE.Object3DEventMap> }) => {
				gltf.scene.traverse((child) => {
					if (child instanceof THREE.Mesh) {
						child.castShadow = true
						child.receiveShadow = true
						if (child.material) {
							child.material.castShadow = true
						}
					}
				})

				scene.add(gltf.scene)

				const bbox = new THREE.Box3().setFromObject(gltf.scene)
				const center = bbox.getCenter(new THREE.Vector3())
				gltf.scene.position.sub(center)

				animate()
			},
			undefined,
			(error: any) => {
				console.error("Error loading GLTF model", error)
			}
		)

		camera.position.set(0, 0.02, 0.15)
		camera.lookAt(new THREE.Vector3(0, 0, 0))

		const ambientLight = new THREE.AmbientLight(0xffffff, 0.725)
		scene.add(ambientLight)

		const directionalLight = new THREE.DirectionalLight(0xffffff, 1)
		directionalLight.position.set(0.5, 1, 0.5)
		directionalLight.castShadow = true
		directionalLight.shadow.mapSize.width = 2048
		directionalLight.shadow.mapSize.height = 2048
		scene.add(directionalLight)

		const floorGeometry = new THREE.PlaneGeometry(10, 10)
		const floorMaterial = new THREE.MeshStandardMaterial({
			transparent: true,
			opacity: 0,
		})

		const floorMesh = new THREE.Mesh(floorGeometry, floorMaterial)
		floorMesh.position.set(0, -0.0175, 0)
		floorMesh.receiveShadow = true
		floorMesh.rotation.x = -Math.PI / 2
		floorMesh.castShadow = false
		scene.add(floorMesh)

		window.addEventListener("resize", onWindowResize)
		renderer.domElement.addEventListener("mousedown", onMouseDown)
		renderer.domElement.addEventListener("mouseup", onMouseUp)
		renderer.domElement.addEventListener("mousemove", onMouseMove)
		renderer.domElement.addEventListener("touchstart", onTouchStart, {
			passive: true,
		})
		renderer.domElement.addEventListener("touchend", onTouchEnd, {
			passive: true,
		})
		renderer.domElement.addEventListener("touchmove", onTouchMove, {
			passive: true,
		})

		return () => {
			window.removeEventListener("resize", onWindowResize)
			renderer.domElement.removeEventListener("mousedown", onMouseDown)
			renderer.domElement.removeEventListener("mouseup", onMouseUp)
			renderer.domElement.removeEventListener("mousemove", onMouseMove)
			renderer.domElement.removeEventListener("touchstart", onTouchStart)
			renderer.domElement.removeEventListener("touchend", onTouchEnd)
			renderer.domElement.removeEventListener("touchmove", onTouchMove)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const onWindowResize = () => {
		const width = window.innerWidth
		const height = window.innerHeight
		camera.aspect = width / height
		camera.updateProjectionMatrix()
		renderer.setSize(width, height)
	}

	const onMouseDown = (event: MouseEvent) => {
		scene.rotation.y = Math.floor(Math.random() * 21) - 10
		dragging = true
		previousMousePosition.x = event.clientX
		previousMousePosition.y = event.clientY
		renderer.domElement.style.cursor = "grabbing"
	}

	const onMouseUp = () => {
		if (dragging) {
			dragging = false
			rotationVelocity = (scene.rotation.y - previousRotation) * 0.05
			previousRotation = scene.rotation.y
			if (Math.abs(rotationVelocity) < 0.0001) {
				rotationVelocity = 0
			}
		}
		renderer.domElement.style.cursor = "grab"
	}

	const onMouseMove = (event: MouseEvent) => {
		if (dragging && event.buttons === 1) {
			const deltaMove = {
				x: event.clientX - previousMousePosition.x,
				y: event.clientY - previousMousePosition.y,
			}

			scene.rotation.y += deltaMove.x * 0.01

			previousMousePosition.x = event.clientX
			previousMousePosition.y = event.clientY
		}
	}

	const onTouchStart = (event: TouchEvent) => {
		scene.rotation.y = Math.floor(Math.random() * 21) - 10
		if (event.touches.length === 1) {
			dragging = true
			previousMousePosition.x = event.touches[0].clientX
			previousMousePosition.y = event.touches[0].clientY
			renderer.domElement.style.cursor = "grabbing"
		}
	}

	const onTouchEnd = () => {
		if (dragging) {
			dragging = false
			rotationVelocity = (scene.rotation.y - rotationVelocity) * 0.05
			if (Math.abs(rotationVelocity) < 0.0001) {
				rotationVelocity = 0
			}
		}
		renderer.domElement.style.cursor = "grab"
	}

	const onTouchMove = (event: TouchEvent) => {
		if (dragging && event.touches.length === 1) {
			const deltaMove = {
				x: event.touches[0].clientX - previousMousePosition.x,
				y: event.touches[0].clientY - previousMousePosition.y,
			}

			scene.rotation.y += deltaMove.x * 0.01

			previousMousePosition.x = event.touches[0].clientX
			previousMousePosition.y = event.touches[0].clientY
		}
	}

	let previousRotation = 0

	const animate = () => {
		requestAnimationFrame(animate)

		if (!dragging) {
			rotationVelocity *= 0.98
			scene.rotation.y += rotationVelocity
			if (Math.abs(rotationVelocity) < 0.0001) {
				rotationVelocity = 0
			}
		}

		scene.rotation.y += 0.002
		renderer.render(scene, camera)
	}

	return <div ref={sceneRef} />
}

export default NightOwl
