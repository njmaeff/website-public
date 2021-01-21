import {AppBar, Box, Tab, Tabs,} from "@material-ui/core";
import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {useTheme} from "@njmaeff/website-ui/hooks/useTheme";

interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
}

const StyledTab = styled(Tab)`
    padding: 1em;
`
export function TabPanel({children, value, index, ...other}: TabPanelProps) {

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    {children}
                </Box>
            )}
        </div>
    );
}


export function a11yProps(index: any) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const Wrapper = styled.div<{ offset: string }>`
    flex-grow: 1;
    background-color: ${({theme}) => theme.palette.light};
`
const StyledAppBar = styled(AppBar)`
    background-color: ${({theme}) => theme.palette.dark};
`

interface SimpleTabsOptions {
    tabs: [string, React.FC][];
    End?: React.FC;
    container: React.MutableRefObject<HTMLDivElement>
}

export function SimpleTabs({
                               tabs,
                               container,
                               End
                           }: SimpleTabsOptions) {
    const [value, setValue] = React.useState(0);
    const [height, setHeight] = useState(undefined);
    const appBar = useRef<HTMLDivElement>()
    const theme = useTheme()

    useEffect(() => {
        setHeight(appBar.current.offsetHeight)
    }, []);

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
        container.current.scrollTo(0,0)
    };

    const TabComponents = tabs.map(([id, _], index) => <StyledTab key={index}
                                                            label={id}

                                                            {...a11yProps(index)}
    />)

    if (End) {
        TabComponents.push(
            <End key={TabComponents.length}/>
        );
    }
    const TabContent = tabs.map(([_, Component], index) => (
        <TabPanel value={value} index={index} key={index}>
            <Component/>
        </TabPanel>
    ))

    return (
        <Wrapper offset={height + 'px'}>
            <StyledAppBar ref={appBar} position="sticky">
                <Tabs value={value} onChange={handleChange}
                      aria-label="tabs"
                      TabIndicatorProps={{style: {backgroundColor: theme.palette.light}}}
                >
                    {TabComponents}
                </Tabs>
            </StyledAppBar>
            {TabContent}
        </Wrapper>
    );
}
