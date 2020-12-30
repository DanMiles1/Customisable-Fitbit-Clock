function mySettings(props) {
  return (
    <Page>
      <Section
        title={<Text bold align="center">If you see XXX wait a minute or move...</Text>}>
        <Text>Background Color</Text>
        <ColorSelect
          settingsKey="backgroundcolor"
          label="Toggle Switch"
          colors={[
            {color: "tomato"},
            {color: "black"},
            {color: "deepskyblue"},
            {color: "plum"},
            {color: "white"},
            {color: "red"},
            {color: "orange"},
            {color: "purple"},
            {color: "magenta"},
            {color: "green"},
            {color: "indigo"},
            {color: "cyan"},
            {color: "blue"},
            {color: "lawngreen"},
            {color: "hotpink"},
            {color: "greenyellow"},
            {color: "gold"},
            {color: "fuchsia"},
            {color: "ivory"},
            {color: "gray"},
            {color: "deeppink"},
            {color: "darkviolet"},
            {color: "dodgerblue"},
            {color: "yellow"},
            {color: "darkorange"},
            {color: "chartreuse"},
            {color: "antiquewhite"},
            {color: "cornflowerblue"},
            {color: "darkgrey"},
            {color: "crimson"}
          ]}
        />
        <Text>Clock Color</Text>
        <ColorSelect
          settingsKey="clockcolor"
          label="Toggle Switch"
          colors={[
            {color: "tomato"},
            {color: "black"},
            {color: "deepskyblue"},
            {color: "plum"},
            {color: "white"},
            {color: "red"},
            {color: "orange"},
            {color: "purple"},
            {color: "magenta"},
            {color: "green"},
            {color: "indigo"},
            {color: "cyan"},
            {color: "blue"},
            {color: "lawngreen"},
            {color: "hotpink"},
            {color: "greenyellow"},
            {color: "gold"},
            {color: "fuchsia"},
            {color: "ivory"},
            {color: "gray"},
            {color: "deeppink"},
            {color: "darkviolet"},
            {color: "dodgerblue"},
            {color: "yellow"},
            {color: "darkorange"},
            {color: "chartreuse"},
            {color: "antiquewhite"},
            {color: "cornflowerblue"},
            {color: "darkgrey"},
            {color: "crimson"}
          ]}
        />
         <Slider
  label="Clock Size"
  settingsKey="clocksize"
  min="0"
  max="140"
/>
        <Text>Date Color</Text>
        <ColorSelect
          settingsKey="datecolor"
          colors={[
            {color: "tomato"},
            {color: "black"},
            {color: "deepskyblue"},
            {color: "plum"},
            {color: "white"},
            {color: "red"},
            {color: "orange"},
            {color: "purple"},
            {color: "magenta"},
            {color: "green"},
            {color: "indigo"},
            {color: "cyan"},
            {color: "blue"},
            {color: "lawngreen"},
            {color: "hotpink"},
            {color: "greenyellow"},
            {color: "gold"},
            {color: "fuchsia"},
            {color: "ivory"},
            {color: "gray"},
            {color: "deeppink"},
            {color: "darkviolet"},
            {color: "dodgerblue"},
            {color: "yellow"},
            {color: "darkorange"},
            {color: "chartreuse"},
            {color: "antiquewhite"},
            {color: "cornflowerblue"},
            {color: "darkgrey"},
            {color: "crimson"}
          ]}
        />
  <Slider
  label="Date Size"
  settingsKey="datesize"
  min="0"
  max="22"
/>
         <Text>Steps Color</Text>
        <ColorSelect
          settingsKey="stepscolor"
          colors={[
            {color: "tomato"},
            {color: "black"},
            {color: "deepskyblue"},
            {color: "plum"},
            {color: "white"},
            {color: "red"},
            {color: "orange"},
            {color: "purple"},
            {color: "magenta"},
            {color: "green"},
            {color: "indigo"},
            {color: "cyan"},
            {color: "blue"},
            {color: "lawngreen"},
            {color: "hotpink"},
            {color: "greenyellow"},
            {color: "gold"},
            {color: "fuchsia"},
            {color: "ivory"},
            {color: "gray"},
            {color: "deeppink"},
            {color: "darkviolet"},
            {color: "dodgerblue"},
            {color: "yellow"},
            {color: "darkorange"},
            {color: "chartreuse"},
            {color: "antiquewhite"},
            {color: "cornflowerblue"},
            {color: "darkgrey"},
            {color: "crimson"}
          ]}
        />
         <Slider
  label="Steps Size"
  settingsKey="stepssize"
  min="0"
  max="30"
/>
          <Text>Heartrate Color</Text>
        <ColorSelect
          settingsKey="heartcolor"
          colors={[
            {color: "tomato"},
            {color: "black"},
            {color: "deepskyblue"},
            {color: "plum"},
            {color: "white"},
            {color: "red"},
            {color: "orange"},
            {color: "purple"},
            {color: "magenta"},
            {color: "green"},
            {color: "indigo"},
            {color: "cyan"},
            {color: "blue"},
            {color: "lawngreen"},
            {color: "hotpink"},
            {color: "greenyellow"},
            {color: "gold"},
            {color: "fuchsia"},
            {color: "ivory"},
            {color: "gray"},
            {color: "deeppink"},
            {color: "darkviolet"},
            {color: "dodgerblue"},
            {color: "yellow"},
            {color: "darkorange"},
            {color: "chartreuse"},
            {color: "antiquewhite"},
            {color: "cornflowerblue"},
            {color: "darkgrey"},
            {color: "crimson"}
          ]}
        />
         <Slider
  label="Heartrate Size"
  settingsKey="heartsize"
  min="0"
  max="85"
/>
        <Text>Stairs Color</Text>
        <ColorSelect
          settingsKey="stairscolor"
          colors={[
            {color: "tomato"},
            {color: "black"},
            {color: "deepskyblue"},
            {color: "plum"},
            {color: "white"},
            {color: "red"},
            {color: "orange"},
            {color: "purple"},
            {color: "magenta"},
            {color: "green"},
            {color: "indigo"},
            {color: "cyan"},
            {color: "blue"},
            {color: "lawngreen"},
            {color: "hotpink"},
            {color: "greenyellow"},
            {color: "gold"},
            {color: "fuchsia"},
            {color: "ivory"},
            {color: "gray"},
            {color: "deeppink"},
            {color: "darkviolet"},
            {color: "dodgerblue"},
            {color: "yellow"},
            {color: "darkorange"},
            {color: "chartreuse"},
            {color: "antiquewhite"},
            {color: "cornflowerblue"},
            {color: "darkgrey"},
            {color: "crimson"}
          ]}
        />
        
        <Slider
  label="Stairs Size"
  settingsKey="stairsize"
  min="0"
  max="30"
/>
       

      </Section>
    </Page>
  );
}
registerSettingsPage(mySettings);
