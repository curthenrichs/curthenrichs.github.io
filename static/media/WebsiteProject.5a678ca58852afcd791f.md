# Portfolio Website

This website has been a project in its own right. Originally, I had planned on using a no-code / low-code tool to generate my portfolio website. However, I couldn’t quite find a tool with the flexibility / configurability I had in mind for my website. More specifically, I wanted a place to aggregate my projects, skills, publications, social media profiles, etc. into one place that I had complete creative control over. To build this website, I tapped into my experience building robot user interfaces (a skill I picked up in graduate school). 

## Constraints

My primary constraint was that I wanted to build a static-hosted website on Github Pages. The upside was that this meant no backend service and database maintenance. Github pages also was a good target given cost and deployability. A secondary constraint was my target framework. During the time I started development of this website, I was also deeply involved in the development of CoFrame (see the project titled as such). CoFrame was built using React with Microsoft Fluent visual framework. My colleague and I wanted to move away from Fluent toward something he was more familiar with Ant Design. So I set a constraint that this website would make use of Ant Design as a forcing function to learn it.

## Development

My website went through two major cycles of development. 

In the first cycle, I accomplished an MVP of my project vision. It was clunky. The project section was laid out as a two-dimensional grid with each project sized to fit its particular contents. As one can imagine it was chaotic. Additionally, there wasn’t a clear separation of career from projects further muddling that section. I had also rushed past defining policies (e.g., terms of use) to get it published. It wasn’t quite an asset yet but it did the job of aggregating information.

For the second cycle, my main goal was refinement and refactor. I have updated all content on the website to be current. I removed/consolidated smaller projects that just served to clutter the projects section. Career section was separated. Lastly, I tweaked the responsive layout to better adjust for most screen configurations.

## Accomplishments

I am rather pleased with the responsive design solution, given my lack of expertise in the area. My vision was to have a dynamic summary section and skills section dependent on screen width. First this required me to track width. I implemented this via a React context that monitors the screen width (allowing for real-time resizing) within a page template component. Then in the summary section, I dynamically adjust between three major layouts: phone, tablet vertical, and landscape. 

For the skills section, I wanted to have multiple rows, aligned page center. The standard grid element of Ant Design does not handle this when overflowing past a single line. To get around this, I wrote an algorithm that splits the list of skill tiles into a set of rows accounting for screen width. Each row is displayed in a centered Ant Design grid. Furthermore, if the number of rows is greater than two, then a drop down button is rendered allowing for expand/collapse of skills instead of forcing users to scroll through the entire list.

There are also some other small changes based on width. I will quickly list a few examples:

- Header collapses section navigation for mobile view.
- Footer adjusts sitemap for mobile view.
- Content cards and modals adjust displayed content, scaling, etc. based on width.
