// "use client";

// // components/PhysicsComponent.js
// import { useEffect, useRef } from "react";
// import Matter, { Bodies, Render, Runner } from "matter-js";

// const PhysicsComponent = () => {
//   const sceneRef = useRef(null); // This will reference the canvas DOM element

//   useEffect(() => {
//     // Create an engine
//     const engine = Matter.Engine.create();

//     // Create a render
//     const render = Matter.Render.create({
//       element: sceneRef.current,
//       engine: engine,
//     });

//     // Create a box and a ground
//     const boxA = Bodies.rectangle(400, 200, 80, 80);
//     const boxB = Bodies.rectangle(450, 50, 80, 80);
//     const ground = Bodies.rectangle(400, 610, 810, 60, { isStatic: true });

//     // Add the bodies to the world
//     Matter.Composite.add(engine.world, [boxA, boxB, ground]);

//     // Run the engine and the render
//     Render.run(render);

//     // Create runner
//     const runner = Runner.create();

//     // Run the engine
//     Runner.run(runner, engine);
//   }, []);

//   // Create a renderer
//   // const render = Matter.Render.create({
//   //   element: sceneRef.current, // Reference the scene container
//   //   engine: engine,
//   //   options: {
//   //     width: 800,
//   //     height: 600,
//   //     wireframes: false,
//   //   },
//   // });

//   // Create ground and some boxes
//   //     const ground = Matter.Bodies.rectangle(400, 580, 810, 60, {
//   //       isStatic: true,
//   //     });
//   //     const boxA = Matter.Bodies.rectangle(400, 200, 80, 80);
//   //     const boxB = Matter.Bodies.rectangle(450, 50, 80, 80);

//   //     Matter.World.add(world, [boxA, boxB, ground]);

//   //     // Run the engine and renderer
//   //     Matter.Engine.run(engine);
//   //     Matter.Render.run(render);

//   //     // Cleanup function when component unmounts
//   //     return () => {
//   //       Matter.Render.stop(render);
//   //     //   Matter.World.clear(world);
//   //       Matter.Engine.clear(engine);
//   //     };
//   //   }, []);

//   return <div ref={sceneRef} />;
// };

// export default PhysicsComponent;
