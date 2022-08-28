---
title: The Intel 8080 Processor
tags: [intel, 8080]
keywords: CPU, cpu, processor, qualification, information, pictures, core, frequency, chip packaging, packaging, cpu info, x86, collection, amd, cyrix, harris, ibm, idt, iit, intel, motorola, nec, sgs, sgs-thomson, siemens, ST, signetics, mhs, ti, texas instruments, ulsi, umc, weitek, zilog, 808x, 8085, 8088, 8086, 80188, 80186, 80286, 286, 80386, 386, i386, Am386, 386sx, 386dx, 486, i486, 586, 486sx, 486dx, overdrive, 487, pentium, 586, 5x86, 386dlc, 386slc, 486dx2, mmx, ppro, pentium-pro, pro, athlon, duron, z80, dirk oppelt, dirk, oppelt, engineering, sample, samples
last_updated: July 16, 2016
summary: ""
sidebar: mydoc_sidebar
permalink: intel_8080.html
folder: cpus
---

## Relative links

You can now view the site offline rather than solely through the Jekyll preview server or deployed on a web server. The linking approach in both the sidebar and with inline links uses relative linking throughout.

## Subfolders for pages

You can creates folders and subfolders for your pages, similar to how you can store posts in folders and subfolders. When Jekyll builds the site, all pages get pushed into the root directory as single html files (rather than being pushed inside folders, or remaining in subfolders). See [Pages][mydoc_pages] for more details.

## Alerts templates

You can use include templates for notes, tips, and warnings. These include templates make it easier to insert notes. If you make an error, you're immediately made aware since the site won't build. See [Alerts][mydoc_alerts] for more details.

## Image templates

Similar to alerts, images also have include templates. You can insert both regular images and inline images, such as images that are a button or icon. See [Images][mydoc_images] for more details.

## Automated links using Markdown formatting

Instead of using YAML references to handle links, I've switched to a Markdown reference style approach. A links.html file iterates through the sidebar files and formats the content in the Markdown reference. You then just use Markdown syntax for the links. See [Links][mydoc_hyperlinks] for more details.

## Workflow maps

If you want to display a workflow map for a process, you can do so by adding some properties in your frontmatter. The workflow map helps guide users through a process. Both simple and complex workflow maps are available. For more details, see [Workflow maps][mydoc_workflow_maps].

## Upgrading

If you want to upgrade from an earlier version of the theme, I recommend that you download the new theme and copy of your Markdown files into the new theme. You'll then need to make adjustments to your page frontmatter, to the sidebar table of contents, links, image references, and alert references. In short, there's no easy upgrade path. But all of this won't take too long if you don't have mountains of content.

{% include links.html %}
