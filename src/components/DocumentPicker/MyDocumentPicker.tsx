import React, { useState } from 'react';
import * as DocumentPicker from 'expo-document-picker';
import { ErrorText, Icon, Section, SectionText, SectionTitle, SelectFile } from './styled';
import { colors } from 'theme/theme';
import { useStore } from 'store/store';

const MyDocumentPicker = () => {
    const [selectedFile, setSelectedFile] = useState('');
    const [errorPicked, setErrorPicked] = useState('');
    const setVoiceInput = useStore((state: any) => state.setVoiceInput); // get setVoiceInput from the store

    const pickDocument = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({
                type: "audio/*",
            }) as DocumentPicker.DocumentPickerResult;
              // Check if the assets array is not empty
            if (result.assets && result.assets.length > 0) {
                const document = result.assets[0]; // Get the first document
                // Extract the uri and name from the document
                const uri = document.uri;
                const name = document.name;
                setVoiceInput({audioInput: uri});
                setSelectedFile(name);
            }
        } catch (error) {
            console.error('Error picking document:', error);
            setSelectedFile('');
            setErrorPicked('Error while picking file.')
        }
    };

    return (
        <Section>
            <SectionTitle>Pick a voice line</SectionTitle>
            <SelectFile onPress={pickDocument}>          
                {(selectedFile!=='') ? (
                    <SectionText style={{color: colors.primaryLightGreyHex}}>{selectedFile}</SectionText>
                ) : (
                    <>
                        <Icon name='add' size={18}
                            color={colors.primaryOrangeHex}/>
                        <SectionText>Choose a file</SectionText>
                    </> 
                )}
            </SelectFile>
            {(errorPicked) && <ErrorText>{errorPicked}</ErrorText>}
        </Section>
    );
};

export default MyDocumentPicker;
