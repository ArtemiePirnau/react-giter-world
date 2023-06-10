import { createSlice } from "@reduxjs/toolkit";

const questionsSlice = createSlice({
  name: "questions",
  initialState: {
    questions: [
      {
        id: 0,
        title: " Чем занимается наша компания ?",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mollis nibh. Fusce sit amet sem venenatis,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mollis nibh. Fusce sit amet sem venenatis,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mollis nibh. Fusce sit amet sem venenatis,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mollis nibh. Fusce sit amet sem venenatis,",
      },
      {
        id: 1,
        title: " Чем занимается наша компания ?",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mollis nibh. Fusce sit amet sem venenatis,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mollis nibh. Fusce sit amet sem venenatis,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mollis nibh. Fusce sit amet sem venenatis,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mollis nibh. Fusce sit amet sem venenatis,",
      },
      {
        id: 2,
        title: " Чем занимается наша компания ?",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mollis nibh. Fusce sit amet sem venenatis,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mollis nibh. Fusce sit amet sem venenatis,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mollis nibh. Fusce sit amet sem venenatis,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mollis nibh. Fusce sit amet sem venenatis,",
      },
      {
        id: 3,
        title: " Чем занимается наша компания ?",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mollis nibh. Fusce sit amet sem venenatis,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mollis nibh. Fusce sit amet sem venenatis,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mollis nibh. Fusce sit amet sem venenatis,Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in mollis nibh. Fusce sit amet sem venenatis,",
      },
    ],
  },
  reducers: {},
});

export default questionsSlice.reducer;
