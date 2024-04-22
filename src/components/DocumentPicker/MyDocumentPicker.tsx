import React, { useState } from 'react';
import * as DocumentPicker from 'expo-document-picker';
import { ErrorText, Icon, Section, SectionText, SectionTitle, SelectFile } from './styled';
import { colors } from 'theme/theme';

type DocumentPickerResponse = {
    uri: string;
    type: any;
    name: string;
    size: number;
};

const MyDocumentPicker = () => {
    const [selectedFile, setSelectedFile] = useState<DocumentPickerResponse | null>(null);
    const [errorPicked, setErrorPicked] = useState('');

    const pickDocument = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({
                type: "audio/*",
            }) as any;
            if (result.type === 'success') {
                setSelectedFile(result);
            } else {
                setSelectedFile(null);
                setErrorPicked('No file was picked.');
            }
        } catch (error) {
            console.error('Error picking document:', error);
            setSelectedFile(null);
            setErrorPicked('Error while picking file.')
        }
    };

    return (
        <Section>
            <SectionTitle>Pick a voice line</SectionTitle>
            <SelectFile onPress={pickDocument}>          
                {(selectedFile!==null) ? (
                    <SectionText style={{color: colors.primaryLightGreyHex}}>{selectedFile.name}</SectionText>
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
