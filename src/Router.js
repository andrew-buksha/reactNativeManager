/**
 * Created by alexandr on 03.04.17.
 */
import React from 'react';
import {
    Scene,
    Router,
    Actions
} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import CreateEmployee from './components/CreateEmployee';
import EditEmployee from './components/EditEmployee';

const RouterComponent = () => {
    return (
        <Router sceneStyle={{ paddingTop: 65 }}>
            <Scene key="auth" initial>
                <Scene key="login" component={LoginForm} title="Please Login"/>
            </Scene>
            <Scene key="main">
                <Scene
                    rightTitle="Add"
                    onRight={() => Actions.createEmployee()}
                    key="employeeList"
                    component={EmployeeList}
                    title="Employees"
                    initial
                />
                <Scene key="createEmployee" component={CreateEmployee} title="Create Employee"/>
                <Scene key="editEmployee" component={EditEmployee} title="Edit Employee"/>
            </Scene>
        </Router>
    );
};

export default RouterComponent;