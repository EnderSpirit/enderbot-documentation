import {
    themes as prismThemes
} from 'prism-react-renderer';
import type {
    Config
} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import EmojiDictionary from './src/modules/EmojiDictionary';

const config: Config = {
    staticDirectories: ['public', 'static'],
    markdown: {
        preprocessor: ({
            filePath,
            fileContent
        }) => {
            const emoji_regex = /:([a-z0-9_]+):/g;
            if (fileContent != undefined) {
                const matches = fileContent.match(emoji_regex);
                if (!matches) return fileContent;
                matches.forEach((match) => {
                    const emoji_name = match.slice(1, -1);
                    const emoji = EmojiDictionary.find((emoji) => emoji.name === emoji_name);
                    console.log(`Found emoji ${emoji_name}`);
                    if (emoji) {
                        console.log(`Replacing ${match} with ${emoji.path}`);
                        fileContent = fileContent.replace(match, `![emoji](${emoji.path})`);
                    }
                });
            }
            return fileContent;
        },
    },
    title: 'EnderBot Wiki',
    tagline: 'Bienvenue sur le Wiki!',
    favicon: 'img/icon/enderbotrotate.gif',

    // Set the production url of your site here
    url: 'https://your-docusaurus-site.example.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'facebook', // Usually your GitHub org/user name.
    projectName: 'docusaurus', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'fr'],
        path: './i18n',
        localeConfigs: {
            en: {
                label: 'English',
                direction: 'ltr',
                htmlLang: 'en-US',
                calendar: 'gregory',
                path: 'en',
            },
            fr: {
                label: 'Français',
                direction: 'ltr',
                htmlLang: 'fr-FR',
                calendar: 'gregory',
                path: 'fr',
            },
        }
    },

    presets: [
        [
            'classic',
            {
                docs: {
                    remarkPlugins: [require('remark-math')],
                    rehypePlugins: [require('rehype-katex')],
                    sidebarPath: './sidebars.ts',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        // Replace with your project's social card
        image: 'img/icon/enderbot_profile_picture.png',
        navbar: {
            title: 'EnderBot Wiki',
            logo: {
                alt: 'My Site Logo',
                src: 'img/icon/enderbot_profile_picture.png',
            },
            items: [{
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: 'Beginner\'s guide',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: 'Commands',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: 'Index',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: 'Premium',
                },
                {
                    type: 'docSidebar',
                    sidebarId: 'tutorialSidebar',
                    position: 'left',
                    label: 'Official Discord',
                },
                {
                    type: 'localeDropdown',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [{
                    title: 'Docs',
                    items: [{
                        label: 'Beginner\'s guide',
                        to: '/docs/intro',
                    }, ],
                },
                {
                    title: 'Community',
                    items: [{
                        label: 'Discord',
                        href: 'https://discordapp.com/invite/docusaurus',
                    }, ],
                },
                {
                    title: 'More',
                    items: [{
                        label: 'GitHub',
                        href: 'https://github.com/facebook/docusaurus',
                    }, ],
                },
            ],
            copyright: `© 2017-2024 EnderBot™. All Rights Reserved.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    } satisfies Preset.ThemeConfig,
};

export default config;