import {randomUUID} from "@azure/core-util";
import {createClientLogger} from "@azure/logger";

export function logErrorStackTrace(error: unknown): void {
  if (error && typeof error === 'object' && 'stack' in error) {
    logger.verbose(error);
  }
}
export function getRandomName(prefix?: string): string {
  const str = randomUUID();
  return prefix ? `${prefix}-${str}` : str;
}

export const logger = createClientLogger('eventhubs-checkpointstore-mongodb');
