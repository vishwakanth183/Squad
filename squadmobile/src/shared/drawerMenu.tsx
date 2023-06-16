import { TasksRoute } from "../stack/routeNames"

export const MaterialIcon = 'material'
export const MaterialCommunityIcons = 'material-community' 
export const FontAwesome5 = 'font-awesome-5'
export const FontAwesome = 'font-awesome'
export const Ionicon = 'ionicon'
export const AntDesign = 'antdesign'
export const Entypo = 'entypo'


export const drawerMenu = [
    {
        title: 'Dashboard',
        navigateTo : TasksRoute
    },
    {
        title: 'TaskList',
        navigateTo : TasksRoute
    },
    {
        title: 'Milestone',
        navigateTo : TasksRoute
    },
    {
        title: 'Leaves and permission',
        navigateTo : TasksRoute
    },
    {
        title: 'Performance',
        navigateTo : TasksRoute
    },
];