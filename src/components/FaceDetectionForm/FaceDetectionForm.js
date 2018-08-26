import React from 'react';

const FaceDetectionForm=()=>{
		return(
			<div>
					<p className="f4 light-gray">
					{'This Magic Alien will detect faces in your pictures...Give it a try!'}
					</p>
			        <div className="ma1 pa2 f4">
			        <input className="w-30" type="text" />
			        <button className="grow ma3 bg-dark-red black link">Detect</button>
			        </div>
  			</div>
		);
}
export default FaceDetectionForm;