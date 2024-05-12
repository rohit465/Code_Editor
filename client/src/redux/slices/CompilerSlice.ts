
import {PayloadAction, createSlice} from "@reduxjs/toolkit";

export interface CompilerSliceStateType{
    fullcode: {
        html:string;
        css:string;
        javascript:string;
    };
    currentLanguage:"html" | "css" | "javascript";
  
}

const initialState: CompilerSliceStateType = {
    fullcode:{
        html:"this is html code",
        css:"this is css code",
        javascript:"this is js code"},
    currentLanguage:"html",
    

};


const compilerSlice = createSlice({
    name:"CompilerSlice",
    initialState,
    reducers:{
        updateCurrentLanguage:(state,action: PayloadAction<CompilerSliceStateType["currentLanguage"]>)=>{
            state.currentLanguage = action.payload;
        },
        updateCodeValue: (state, action: PayloadAction<{language:CompilerSliceStateType["currentLanguage"]; code:string}>) =>{
            const {code, language} = action.payload
            state.fullcode[language] = code

        },
        
    },
});

export default compilerSlice.reducer;
export const { updateCurrentLanguage, updateCodeValue } = compilerSlice.actions