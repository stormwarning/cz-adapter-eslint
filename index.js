import engine from './engine'

export default engine({
    types: {
        'Fix': {
            description: 'A bug fix',
            title: 'Bug fixes',
        },
        'Update': {
            description: 'A backwards-compatible enhancement',
            title: 'Updates',
        },
        'Breaking': {
            description: 'A backwards-incompatible enhancement',
            title: 'Breaking changes',
        },
        'Docs': {
            description: 'Documentation change',
            title: 'Docs',
        },
        'Build': {
            description: 'Build process update',
            title: 'Build changes',
        },
        'New': {
            description: 'A new feature implementation',
            title: 'New features',
        },
        'Upgrade': {
            description: 'Dependency upgrade',
            title: 'Upgrades',
        },
    },
})
