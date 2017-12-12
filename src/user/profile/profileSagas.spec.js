// @flow

import { call, put } from 'redux-saga/effects';
import { creationRoutine, fetchRoutine } from './profileRoutines';
import profileApi from './profileApi';
import { createProfile, fetchProfile } from './profileSagas';
import type { Profile } from './profileState';

describe('profile sagas', () => {
  it('can create profile', () => {
    const profile: Profile = {
      id: null,
      firstName: 'Jordan',
      lastName: 'Valdma',
      dateOfBirth: new Date('1908-02-01'),
      mobileNumber: '+3725555555',
    };

    const profileFormValues: * = {
      id: null,
      firstName: 'Jordan',
      lastName: 'Valdma',
      day: '01',
      month: '02',
      year: '1908',
      internationalCallingCode: '+372',
      phoneNumber: '5555555',
    };

    const generator = createProfile(
      creationRoutine({ values: profileFormValues }),
    );

    expect(generator.next().value).toEqual(
      call(profileApi.createProfile, profile),
    );
    expect(generator.next(profile).value).toEqual(
      put(creationRoutine.success(profile)),
    );
    expect(generator.next().done).toBeTruthy();
  });

  it('can fetch profile', () => {
    const profile: Profile = {
      id: null,
      firstName: 'Jordan',
      lastName: 'Valdma',
      dateOfBirth: new Date('1908-02-01'),
      mobileNumber: '+3725555555',
    };

    const generator = fetchProfile(fetchRoutine());

    expect(generator.next().value).toEqual(call(profileApi.fetchProfile));
    expect(generator.next(profile).value).toEqual(
      put(creationRoutine.success(profile)),
    );
    expect(generator.next().done).toBeTruthy();
  });
});