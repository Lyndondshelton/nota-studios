import { CollectionConfig } from "payload";
import { KEY_LIST, SCALE_TYPE } from "./constants/constants";

export const Beats: CollectionConfig = {
    slug : 'beats-collection',
    admin:{
        useAsTitle: 'title'
    },
    fields:[
        {
            name:'title',
            type:'text',
            required: true
        },
        {
            name: 'prodBy',
            type: 'text',
            required: true,
        },
        {
            name: 'beatFile',
            type: 'upload',
            relationTo:'media',
            required: true,
            admin:{
                description: 'Upload .mp3 or .wav file'
            },
            hooks: {
                beforeChange: [
                    async ({data, req:{payload}}) => {
                        if(data?.beatFile){
                            const mediaDoc = await payload.findByID({
                                collection: 'media',
                                id: data.beatFile,
                            });
                            const validExtensions = ['.mp3', '.wav'];
                            const fileExtension = mediaDoc.filename?.split('.').pop()?.toLowerCase();

                            if(!validExtensions.includes(`.${fileExtension}`)){
                                console.log('file extension return: ', fileExtension);
                                throw new Error('Invalid file format. Please upload only .mp3 or .wav files.');
                            }
                        }
                    }
                ]
            }
        },
        {
            name: 'bpmInfo',
            type: 'number',
            admin:{
                description: 'Enter the tempo in beats per minute (BPM).'
            }
        },
        {
            name: 'key',
            type: 'select',
            options: KEY_LIST,
            admin:{
                description: 'Select the key of the song.'
            }
        },
        {
            name: 'scale',
            type: 'select',
            options: SCALE_TYPE,
            admin:{
                description: 'Select the scale of the song.',
                condition: (data) => !!data.key, // Visible only if a key is selected
            }
        },
        {
            name: 'stems',
            type: 'upload',
            relationTo: 'media',
            admin:{
                description: 'Please upload the stems folder.',
                condition: (data) => !!data.beatFile,
            },
            hooks: {
                beforeChange: [
                    async ({data, req:{payload}}) => {
                        if(data?.stems){
                            const mediaDoc = await payload.findByID({
                                collection: 'media',
                                id: data.stems,
                            });
                            const validExtensions = ['.zip'];
                            const fileExtension = mediaDoc.filename?.split('.').pop()?.toLowerCase();

                            if(!validExtensions.includes(`.${fileExtension}`)){
                                console.log('file extension return: ', fileExtension);
                                throw new Error('Invalid file format. Please upload only .zip files.');
                            }
                        }
                    }
                ]
            }
        }
    ]
}