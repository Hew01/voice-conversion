import {create} from 'zustand';
import {produce} from 'immer';
import voicePackData from 'data/voicePackData';

type VoiceInput = {
    audioInput: string;
    pitch: number;
    model: string;
    message: string;
    preset: string;
}

export const useStore = create((set) => ({
    voicePackList: voicePackData,
    voiceInput: {
        audioInput: '',
        pitch: 0,
        model: '',
        message: '',
        preset: 'Standard',
    } as VoiceInput,
    setVoiceInput: (newVoiceInput: Partial<VoiceInput>) =>
        set(produce((state) => {
            state.voiceInput = {
                ...state.voiceInput,
                ...newVoiceInput,
            };
        })),
}));
