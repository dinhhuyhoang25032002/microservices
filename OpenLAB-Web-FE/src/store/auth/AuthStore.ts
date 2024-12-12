import { create, StateCreator } from "zustand";
import { devtools, persist, createJSONStorage } from "zustand/middleware";

export type UserProps = {
    fullname: string;
    role: string;
    accessToken: string;
    _id: string;
    email: string;
    address?: string;
    image?: string
    dateOfBirth?: string;
    nodeId?: Array<string>;
    courses?: Array<string>;
};

type AuthStoreSliceProps = {
    isAuth: boolean;
    user: UserProps;
    isLoading: boolean;
    setIsAuth: (isAuth: boolean) => void;
    setUser: (user: UserProps) => void;
    setLoading: (isLoading: boolean) => void;
};

const createAuthSlice: StateCreator<AuthStoreSliceProps> = (set) => ({
    isAuth: false,
    isLoading: true,
    user: {
        _id: "",
        fullname: "",
        email: "",
        role: "",
        address: "",
        dateOfBirth: "",
        accessToken: "",
        nodeId: [],
        courses: [],
    },
    setIsAuth: (isAuth: boolean) => set(() => ({ isAuth })),
    setUser: (user: UserProps) => set(() => ({ user })),
    setLoading: (isLoading: boolean) => set(() => ({ isLoading })),
});

export const useAuthStore = create(
    devtools(
        persist<AuthStoreSliceProps>(
            (...a) => ({
                ...createAuthSlice(...a),
            }),
            {
                name: "auth",
                storage: createJSONStorage(() => localStorage),
                onRehydrateStorage: () => (state) => {
                    if (state) {
                        state.setLoading(false);
                    }
                },
            }
        )
    )
);
