import {create} from 'zustand';
import {produce} from 'immer';
import {persist, createJSONStorage} from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import voicePackData from 'data/voicePackData';

type VoicePack = {
    id: number;
    name: string;
    avatar: string;
    fileDirectory: string;
};

export const useStore = create(
    persist(
        (set, get) => ({
            voicePackList: voicePackData,
            addVoicePack: (voicePack: VoicePack) =>
                set(produce((state) => {
                    state.voicePackList.push(voicePack);
                })),
        }),
        {
            name: 'voice-conversion-app',
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
)