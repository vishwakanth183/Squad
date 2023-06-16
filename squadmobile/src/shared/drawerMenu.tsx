import { TasksRoute } from "../stack/routeNames"

export const MaterialIcon = 'material'
export const MaterialCommunityIcons = 'material-community' 
export const FontAwesome5 = 'font-awesome-5'
export const FontAwesome = 'font-awesome'
export const Ionicon = 'ionicon'
export const AntDesign = 'antdesign'
export const Entypo = 'entypo'
export const Octicons = 'Octicons'


const drawerIconSize = 25;

export const drawerMenu = [
    {
        title: 'Dashboard',
        navigateTo : TasksRoute,
        iconType : MaterialIcon,
        iconName : 'dashboard',
        iconSize : drawerIconSize
    },
    {
        title: 'TaskList',
        navigateTo : TasksRoute,
        iconType : FontAwesome5,
        iconName : 'clipboard-list',
        iconSize : drawerIconSize
    },
    {
        title: 'Milestone',
        navigateTo : TasksRoute,
        iconType : MaterialCommunityIcons,
        iconName : 'star-check',
        iconSize : drawerIconSize
    },
    {
        title: 'Leaves and permission',
        navigateTo : TasksRoute,
        iconType : MaterialCommunityIcons,
        iconName : 'timer-off',
        iconSize : drawerIconSize
    },
    {
        title: 'Performance',
        navigateTo : TasksRoute,
        iconType : MaterialCommunityIcons,
        iconName : 'account-star',
        iconSize : drawerIconSize
    },
];