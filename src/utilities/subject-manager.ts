import { Subject, Subscription } from 'rxjs';

export class SubjectManager {
  subject$ = new Subject();
  subscription: Subscription | undefined;

  getSubject() {
    this.subscription = this.subject$.subscribe();
    return this.subject$.asObservable();
  }

  setSubject(value: any) {
    return this.subject$.next(value);
  }

  unsubscribe() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
