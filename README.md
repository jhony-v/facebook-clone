
# Chat Search Tab Reusable Component - Clone Facebook

Clone Floating Facebook Chat Search Tab.


## Preview component 

![preview image](./preview.gif)


```javascript
import React from "react";
import faker from "faker";

function App() {
  

  const dataTest =  Array(20).fill(0).map((e,i) => ({
   title : faker.name.findName(),
   image : faker.image.people(),
  }))

  const dataTest2 =  Array(20).fill(0).map((e,i) => ({
   title : faker.name.lastName(),
   image : faker.image.animals(),
  }))

  return (
        <TabChat
          filterOptions={{
            friends: 0,
            actives : 1,
          }}
          selectedFilterOption={0}
          onOptionSelected={ ({ optionId, fillData }) => {
              fillData(optionId === 0 ? dataTest : dataTest2)
          }}
          onSearch={ (data,value) => {
              data.filter(item => item.title.includes(value)) 
          }}
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
              <TabChat.ListItem 
              key={item.key}  
              style={item.style} 
              image={data.image} 
              text={data.title} />  
            )}
            </TabChat.List>
        </TabChat>
  );
}

export default App;
```