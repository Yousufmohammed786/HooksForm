import React from 'react';
export default function Child() {
    const MyInput = React.forwardRef((props, ref) => {
    return <input ref={ref}/>;
});
   // class Child extends React.Component {
	 const sayHi =() =>{
		console.log('hi');
        alert('hiiii')
	};
   // render () {
	return (<div>Hello</div>);
   // }
}
//export default Child