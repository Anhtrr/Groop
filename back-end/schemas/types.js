const UserTypeInject = require('./UserType')
const EventTypeInject = require('./EventType')
const UserLinkedTypeInject = require('./UserLinkedType')
const PaymentTypeInject = require('./PaymentType')
const SplitToTypeInject = require('./SplitToType')

const types = {}
types.UserType = UserTypeInject(types)
types.EventType = EventTypeInject(types)
types.UserLinkedType = UserLinkedTypeInject(types)
types.PaymentType = PaymentTypeInject(types)
types.SplitToType = SplitToTypeInject(types)

const UserType = types.UserType
const EventType = types.EventType
const UserLinkedType = types.UserLinkedType
const PaymentType = types.PaymentType
const SplitToType = types.SplitToType

module.exports = { UserType, EventType, UserLinkedType, PaymentType, SplitToType }