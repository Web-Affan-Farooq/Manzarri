import {create} from "zustand"

interface NotificationState {
    visible:boolean;
    toogleVisibility:() => void;
}

export const useNotificationSectionVisibility = create<NotificationState>()((set) => (
    {
        visible:false,
        toogleVisibility:() => set((state) => (
            {
                visible:!state.visible
            }
        ))
    }
))