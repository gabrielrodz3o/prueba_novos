<template>
 <header class="header-fixed">

<div class="header-limiter">
    <h1><a href="#">System<span>novo</span></a></h1>
    <nav>
        <router-link to="/">Inicio </router-link> 
        <router-link to="/companies">Compañías </router-link> 
       

    </nav>
</div>

</header>
</template>

<script lang="ts" setup>

</script>

<style lang="scss"  scoped>
.header-fixed {
	//width: 100vw;
	//margin-top: -15px;
	background-color:#292c2f;
	box-shadow:0 1px 1px #ccc;
	padding: 20px 40px;
	height: 80px;
	color: #ffffff;
	box-sizing: border-box;
	//top:-100px;

	-webkit-transition:top 0.3s;
	transition:top 0.3s;
}

// .header-fixed .header-limiter {
// 	max-width: 1200px;
// 	text-align: center;
// 	margin: 0 auto;
// }


// .header-fixed-placeholder{
// 	height: 80px;
// 	display: none;
// }


.header-fixed .header-limiter h1 {
	float: left;
	font: normal 28px Cookie, Arial, Helvetica, sans-serif;
	line-height: 40px;
	margin: 0;
}

.header-fixed .header-limiter h1 span {
	color: #5383d3;
}

.header-fixed .header-limiter a {
	color: #ffffff;
	text-decoration: none;
}

.header-fixed .header-limiter nav {
	font:16px Arial, Helvetica, sans-serif;
	line-height: 40px;
	float: right;
}

.header-fixed .header-limiter nav a{
	display: inline-block;
	padding: 0 5px;
	text-decoration:none;
	color: #ffffff;
	opacity: 0.9;
}

.header-fixed .header-limiter nav a:hover{
	opacity: 1;
}

.header-fixed .header-limiter nav a.selected {
	color: #608bd2;
	pointer-events: none;
	opacity: 1;
}

/* Fixed version of the header */

// body.fixed .header-fixed {
// 	padding: 10px 40px;
// 	height: 50px;
// 	position: fixed;
// 	width: 100%;
// 	top: 0;
// 	left: 0;
// 	z-index: 1;
// }

body.fixed .header-fixed-placeholder {
	display: block;
}

body.fixed .header-fixed .header-limiter h1 {
	font-size: 24px;
	line-height: 30px;
}

body.fixed .header-fixed .header-limiter nav {
	line-height: 28px;
	font-size: 13px;
}




</style>