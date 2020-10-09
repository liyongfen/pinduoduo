import { InjectionToken } from '@angular/core';

export * from './home.service'
export const BASE_URL_TOKEN = new InjectionToken<string>('baseUrl');