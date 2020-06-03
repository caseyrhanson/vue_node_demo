<template>
	<div>
		<canvas ref="game" width="640" height="480" style="border: 1px solid black;"></canvas>
		<p>
			<button v-on:click="move('R')">Right</button>
			<button v-on:click="move('L')">Left</button>
			<button v-on:click="move('U')">Up</button>
			<button v-on:click="move('D')">Down</button>
		</p>
	</div>
</template>

<script>
	import io from "socket.io-client";
	export default {
		name: 'BlockGame',
		data() { return { sock: {}, context: {}, state: {x:0,y:0} } },
		created() { this.sock = io("http://192.168.4.23:3000")},
		mounted() { 
			this.context = this.$refs.game.getContext("2d");
			this.sock.on("state", data => {
				this.state = data;
				this.context.clearRect(0, 0, this.$refs.game.width, this.$refs.game.height);
        this.context.fillStyle = "#FFFFFF";
        this.context.fillRect(0, 0, this.$refs.game.width, this.$refs.game.width);
        this.context.fillStyle = "#000000";
        this.context.fillRect(this.state.x, this.state.y, 20, 20);
			});
		},
		methods: { 
			move(dir) { this.sock.emit("move", dir); },
		}
	}
</script>
<style scoped></style>