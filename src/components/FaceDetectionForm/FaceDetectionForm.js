import React from 'react';

const FaceDetectionForm=({OnInputChange,OnButtonSubmit})=>{
		return(
			<div>
					<p className="f4 light-gray">
					{'This Magic Alien will detect faces in your pictures...Give it a try!'}
					</p>
			        <div className="ma1 pa2 f4">
			        <input className="w-25" type="text" onChange={OnInputChange}/>
			        <button className="grow ma3 bg-dark-red black link pointer" onClick={OnButtonSubmit}>Detect</button>
			        </div>
  			</div>
		);
}
export default FaceDetectionForm;
