/**
 * Created by alexandr on 04.04.17.
 */
import _ from 'lodash';
import React, { Component } from 'react';
import Communications from 'react-native-communications';
import { connect } from 'react-redux';
import {
    employeeUpdate,
    employeeSave,
    employeeDelete
} from '../actions';
import EmployeeForm from './EmployeeForm';
import {
    Card,
    CardSection,
    Button,
    Confirm
} from './common';

class EditEmployee extends Component {
    state = { showModal: false };

    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            console.log('componentWillMount',this.props.employee);
            this.props.employeeUpdate({ prop, value });
        });
    }

    onAccept() {
        this.setState({ showModal: false })
        this.props.employeeDelete({ uid: this.props.employee.uid })
    }

    onDecline() {
        this.setState({ showModal: false })
    }

    onTextPress() {
        const { phone, shift } = this.props;

        Communications.text(phone, `Your upcoming shift is on ${shift}`);
    }

    onButtonPress() {
        const { name, phone, shift } = this.props;

        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
    }

    render() {
        return (
            <Card>
                <EmployeeForm/>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
                        Delete Employee
                    </Button>
                </CardSection>
                <Confirm
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                    visible={this.state.showModal}
                >
                    Are you sure you want to delete this employee?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    console.log('mapStateToProps',name, phone, shift);
    return { name, phone, shift };
}

export default connect(mapStateToProps, {
    employeeUpdate,
    employeeSave,
    employeeDelete
})(EditEmployee);