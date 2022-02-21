import produce from "immer";
import create from "zustand";

const useStore = create(set => {
	return {
		joined: false,
		setJoined: joined => {
			set(() => ({
				joined,
			}));
		},
		channels: [],
		setChannels: channels => {
			set({
				channels,
			});
		},
		players: [],
		addPlayer: player => {
			set(
				produce(draft => {
					draft.players.push(player);
				})
			);
		},
		setPlayers: players => {
			set({
				players,
			});
		},
		removePlayer: uuid => {
			set(
				produce(draft => {
					const index = draft.players.findIndex(player => uuid === player.id);
					if (index >= 0) {
						draft.players.splice(index, 1);
					}
				})
			);
		},
	};
});

export default useStore;
