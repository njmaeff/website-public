import React from "react";
import {ContainerOuter} from "@njmaeff/website-ui/components/layout/containerOuter";
import {ContainerContent} from "@njmaeff/website-ui/components/layout/containerContent";
import {SimpleTabs} from "@njmaeff/website-ui/components/layout/navbar";
import About from "@njmaeff/website-ui/assets/md/about.mdx"
import Projects from "@njmaeff/website-ui/assets/md/projects.mdx";
import Interests from "@njmaeff/website-ui/assets/md/interests.mdx"

export function ScreenMain() {

    return (
        <ContainerOuter>
            <ContainerContent>
                <SimpleTabs tabs={[
                    ["Welcome", () => <About/>],
                    ["Interests", () => <Interests/>],
                    ["Projects", () => <Projects/>],
                ]}
                />
            </ContainerContent>
        </ContainerOuter>
    );
}
