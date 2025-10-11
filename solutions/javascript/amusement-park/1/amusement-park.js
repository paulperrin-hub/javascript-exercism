/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new visitor.
 *
 * @param {string} name
 * @param {number} age
 * @param {string} ticketId
 * @returns {Visitor} the visitor that was created
 */
export function createVisitor(name, age, ticketId) {
  const visitor = {'name': name, 'age': age, 'ticketId': ticketId};
  return visitor
}

/**
 * Revokes a ticket for a visitor.
 *
 * @param {Visitor} visitor the visitor with an active ticket
 * @returns {Visitor} the visitor without a ticket
 */
export function revokeTicket(visitor) {
  if (visitor.ticketId === null) {
    return visitor;
  }
  visitor.ticketId = null;
  return visitor;
}

/**
 * Determines the status a ticket has in the ticket tracking object.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function ticketStatus(tickets, ticketId) {
let looking = null;
  for (let x in tickets) {
    if (x === ticketId) {
      if (tickets[x] === null || tickets[x] === 'undefined') {
        return 'not sold';
      } else  {
        const sold = `sold to ${tickets[x]}`;
        return sold;
      }
    }
    if (x !== ticketId) {
      looking = x;
    }
  }
  if (looking !== null) {
    return 'unknown ticket id';
  }
}

/**
 * Determines the status a ticket has in the ticket tracking object
 * and returns a simplified status message.
 *
 * @param {Record<string, string|null>} tickets
 * @param {string} ticketId
 * @returns {string} ticket status
 */
export function simpleTicketStatus(tickets, ticketId) {
  let invalid = 0;
  for (let i in tickets) {
    if (i === ticketId && tickets[i] !== null) {
      return tickets[i];
    } else {
      invalid += 1;
    }
  }
  if (invalid > 0) {
    return 'invalid ticket !!!';
  }
}

/**
 * Determines the version of the GTC that was signed by the visitor.
 *
 * @param {VisitorWithGtc} visitor
 * @returns {string | undefined} version
 */
export function gtcVersion(visitor) {
  if (!visitor.gtc || !visitor.gtc.version) {
    return;
  } else {
    return visitor.gtc.version;
  }
}
