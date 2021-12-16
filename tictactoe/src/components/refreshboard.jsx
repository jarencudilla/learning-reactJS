import React from 'react'

const style = {
	width: "250px",
	margin: "0 auto",
	display: "grid",
	fontSize: "50px",
	fontWeight: "800",
};

const refreshBoard = (props) => <button name={"btn"} style={style} onClick={props.onClick}>{props.value}</button>

export default refreshBoard