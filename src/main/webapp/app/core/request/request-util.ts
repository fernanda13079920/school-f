import { HttpParams } from '@angular/common/http';

export const createRequestOption = (req?: unknown): HttpParams => {
  let options: HttpParams = new HttpParams();

  if (req) {
    Object.entries(req).forEach(([key, val]) => {
      if (val !== undefined && val !== null) {
        for (const value of [].concat(req[key]).filter(v => v !== '')) {
          options = options.append(key, value);
        }
      }
    });
  }

  return options;
};
