import React from 'react';
import { Scrollama, Step } from 'react-scrollama';

const ScrollAnimation = () => {
	const handleStepEnter = ({ data }) => {
		console.log('Step entering:', data);
		// Perform animation or other actions based on the entered step
	};

	return (
		<div>
			<div style={{ height: '100vh' }}></div>
			<Scrollama onStepEnter={handleStepEnter}>
				<Step data={{ id: 'step1' }}>
					<div style={{ height: '100vh' }}>Step 1</div>
				</Step>
				<Step data={{ id: 'step2' }}>
					<div style={{ height: '100vh' }}>Step 2</div>
				</Step>
				<Step data={{ id: 'step3' }}>
					<div style={{ height: '100vh' }}>Step 3</div>
				</Step>
			</Scrollama>
			<div style={{ height: '100vh' }}></div>
		</div>
	);
};

export default ScrollAnimation;
