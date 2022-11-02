export const initialState = {
  lists: [
    {
      id: "1b0012b7-85fe-4d36-89ac-e0c5b6e5be67",
    },
    {
      id: "0e3a65b7-93e5-49f3-aa98-1c71dd900b31",
    }
  ],
  listTitles: [
    {
      listId: "1b0012b7-85fe-4d36-89ac-e0c5b6e5be67",
      id: "5cf2c5c5-cae9-4010-94f7-f88bfac95957",
      title: "To Do"
    },
    {
      listId: "0e3a65b7-93e5-49f3-aa98-1c71dd900b31",
      id: "045191e2-08f4-4dcd-bde3-19508d340dfe",
      title: "Done"
    }
  ],
  cards: [
    {
      listId: "1b0012b7-85fe-4d36-89ac-e0c5b6e5be67",
      id: "3e4e5789-e485-4330-b78a-11d4f2a94a17",
      title: "first Card - To do"
    },
    {
      listId: "1b0012b7-85fe-4d36-89ac-e0c5b6e5be67",
      id: "c4b549c0-b1b5-4c39-a626-2f8eebc8bc28",
      title: "second Card - To do"
    },
    {
      listId: "0e3a65b7-93e5-49f3-aa98-1c71dd900b31",
      id: "5a37929c-472a-418e-ab01-a1927b05ddf8",
      title: "first Card - Done"
    }
  ],
  tags: [
    {
      cardId: "3e4e5789-e485-4330-b78a-11d4f2a94a17",
      id: "66e70544-53ad-4dad-a4bf-2cf69b82bcca",
      colorIndex: 0,
      title: "server"
    },
    {
      cardId: "3e4e5789-e485-4330-b78a-11d4f2a94a17",
      id: "607c8839-1aa8-45d0-b08c-15345f35f495",
      colorIndex: 1,
      title: "figma"
    },
    {
      cardId: "5a37929c-472a-418e-ab01-a1927b05ddf8",
      id: "88c8b703-961f-40d1-a964-4de63b017c29",
      colorIndex: 2,
      title: "panel"
    }
  ],
  comments: [
    {
      cardId: "5a37929c-472a-418e-ab01-a1927b05ddf8",
      id: "a78ffc37-6483-42c6-9dcf-d0e517b9869b",
      text: "Lorem ipsum dolor sit amet."
    },
    {
      cardId: "5a37929c-472a-418e-ab01-a1927b05ddf8",
      id: "b9d2feb9-ffed-4de6-8a69-a5dea27cfee5",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nulla augue, facilisis eleifend sagittis in."
    }
  ],
}