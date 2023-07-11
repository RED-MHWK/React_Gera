import {defineMessages} from "react-intl";

export default defineMessages({
   loginHeaderp1: {
        id: 'login.Header.part1',
        description: 'Instructions for Login in the Header',
        defaultMessage: 'Bitte geben Sie Ihre ',
    },
    loginHeaderp2: {
        id: 'login.Header.part2',
        description: 'Instructions for Login in the Header',
        defaultMessage: 'Patientennummer ',
    },
    loginHeaderp3: {
        id: 'login.Header.part3',
        description: 'Instructions for Login in the Header',
        defaultMessage: 'ein',
    },
    forgottenNumber: {
        id: 'login.ForgottenNumber.button',
        description: 'An Button for help if the User forgot their patientnumber.',
        defaultMessage: 'Patientennummer vergessen?',
    },
    errorMessage: {
        id: 'login.Patientnumber.error',
        description: 'An error messages for entering a non existing patientnumber.',
        defaultMessage: 'Diese Patientennummer scheint nicht zu existieren',
    }
})