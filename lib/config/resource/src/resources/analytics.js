'use strict';

module.exports = {
  id: 'analytics',
  metrics: [
    {
      name: 'Classifier',
      units: [
        {
          name: 'INSTANCE',
          quantityType: 'CURRENT'
        }]
    },
    {
      name: 'ClassifierApi',
      units: [
        {
          name: 'API_CALL',
          quantityType: 'DELTA'
        }]
    },
    {
      name: 'TrainingEventApi',
      units: [
        {
          name: 'API_CALL',
          quantityType: 'DELTA'
        }]
    }],
  transforms: [
    {
      id: 'CLASSIFIER_INSTANCES_PER_MONTH',
      unit: 'INSTANCE',
      aggregationGroup: {
        name: 'monthly'
      },
      meter: 'AVG({Classifier.INSTANCE})'
    },
    {
      id: 'CLASSIFIER_API_CALLS_PER_MONTH',
      unit: 'API_CALL',
      aggregationGroup: {
        name: 'monthly'
      },
      meter: 'SUM({ClassifierApi.API_CALL})'
    },
    {
      id: 'TRAINING_EVENT_API_CALLS_PER_MONTH',
      unit: 'API_CALL',
      aggregationGroup: {
        name: 'monthly'
      },
      meter: 'SUM({TrainingEventApi.API_CALL})'
    }]
};

