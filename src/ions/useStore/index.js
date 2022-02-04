import create from "zustand";

const useStore = create(set => {
	return {
		name: "",
		setName: name => {
			set(() => ({
				name: name,
			}));
		},
	};
});

export default useStore;
