import {defineMessages} from "react-intl";

export default defineMessages({
    menuHeader: {
        id: 'menu.Header',
        description: 'Headline for appointment details',
        defaultMessage: 'Ihr Termin',
    },
    appointmentDate: {
        id: 'appointment.date',
        description: 'date of the appointment',
        defaultMessage: 'Datum: ',
    },
    appointmentTime: {
        id: 'appointment.time',
        description: 'time of the appointment',
        defaultMessage: 'Uhrzeit: ',
    },
    appointmentReason: {
        id: 'appointment.reason',
        description: 'reason for the appointment',
        defaultMessage: 'Besuchsgrund: ',
    },
    appointmentSection: {
        id: 'appointment.section',
        description: 'the section where the appointment will be',
        defaultMessage: 'Ort: ',
    },
    appointmentLevel: {
        id: 'appointment.level',
        description: 'the level where the appointment will be',
        defaultMessage: 'Ebene: ',
    },
    menuButtonAppointmentInformation: {
        id: 'menu.button.appointmentinfo',
        description: '',
        defaultMessage: 'Terminvorbereitung & Informationen',
    },
    menuButtonChecklist: {
        id: 'menu.button.checklist',
        description: '',
        defaultMessage: 'Checklist',
    },
    menuButtonDocumentsAdmission: {
        id: 'menu.button.documentsadmission',
        description: '',
        defaultMessage: 'Dokumente & Vorab-Anmeldung',
    },
    menuButtonTeam: {
        id: 'menu.button.team',
        description: '',
        defaultMessage: 'Ihr zuständiges Team',
    }
})