import React, { useEffect } from "react";
import TabChat from "./components/ChatTab";
import faker from "faker";

function App() {
  
  const [ data , setData ] = React.useState(Array(Math.floor(Math.random() * 500)).fill(0).map((e,i) => ({
      title : faker.name.findName(),
      image : faker.image.people(),
      category : i % 2 === 0 ? 1 : 0
    })));
  const [ url , setUrl ] = React.useState(0);

  useEffect(() => {
    setData(data.filter(e =>e.category === url))
  // eslint-disable-next-line
  },[url]);

  return (
        <TabChat
          data={data} 
          filterOptions={{
            friends: 0,
            actives : 1,
          }}
          filterOptionsInitial={0}
          onOptionSelected={ optionId => setUrl(optionId) }
          onSearch={ (data,value) => data.filter(item => item.title.includes(value)) }
        >
          <TabChat.Options>
            {(props) =>(
              <>
                <TabChat.Option optionId={props.friends} text="Friends" />
                <TabChat.Option optionId={props.actives} text="Active (52)" />
              </>
            )}
          </TabChat.Options>
            <TabChat.List>
            { (data,item) => (
              <TabChat.ListItem key={item.key}  style={item.style} image={data.image} text={data.title} />  
            )}
            </TabChat.List>
        </TabChat>
  );
}

export default App;
