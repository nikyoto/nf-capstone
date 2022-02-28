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
		countdown: 30,
		setCountdown: countdown => {
			set(() => ({
				countdown,
			}));
		},
		round: 1,
		setRound: round => {
			set(() => ({
				round,
			}));
		},
		started: false,
		setStarted: started => {
			set(() => ({
				started,
			}));
		},
		voted: false,
		setVoted: voted => {
			set(() => ({
				voted,
			}));
		},
		fillValue: 0,
		setFillValue: fillValue => {
			set(() => ({
				fillValue,
			}));
		},
		currentQuestion: "",
		setCurrentQuestion: currentQuestion => {
			set(() => ({
				currentQuestion,
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
		updatePlayer: (uuid, partial) => {
			console.log("-> 1 ", uuid, partial);
			set(
				produce(draft => {
					const index = draft.players.findIndex(player => uuid === player.id);
					console.log("-> 2", index);
					if (index >= 0) {
						console.log("-> 3", draft.players[index]);
						draft.players[index] = {
							...draft.players[index],
							...partial,
							id: uuid,
						};
					}
				})
			);
		},
	};
});

export default useStore;
