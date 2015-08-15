'use strict';

// Usage schema

var schema = require('abacus-schema');

var string = schema.types.string;
var number = schema.types.number;
var time = schema.types.time;

var enumType = schema.types.enumType;
var object = schema.types.object;
var arrayOf = schema.types.arrayOf;

// Consumer schema
var consumer = object({
  type: enumType(['cloud_foundry_application', 'external'], 'cloud_foundry_application'),
  value: string()
}, ['value']);

// Resource schema
var resource = object({
  name: string(),
  unit: string(),
  quantity: number()
}, ['unit', 'quantity']);

// Export our public functions
module.exports = function () {
  return object({
    start: time(),
    end: time(),
    plan_id: string(),
    region: string(),
    organization_guid: string(),
    space_guid: string(),
    consumer: consumer,
    resources: arrayOf(resource)
  }, ['start', 'end', 'plan_id', 'organization_guid', 'space_guid', 'resources']);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy91c2FnZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7QUFJYixJQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7O0FBRXhDLElBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO0FBQ25DLElBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO0FBQ25DLElBQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDOztBQUUvQixJQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztBQUN2QyxJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztBQUNuQyxJQUFNLE9BQU8sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQzs7O0FBR3JDLElBQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQztBQUN0QixNQUFJLEVBQUUsUUFBUSxDQUNaLENBQUMsMkJBQTJCLEVBQUUsVUFBVSxDQUFDLEVBQUUsMkJBQTJCLENBQUM7QUFDekUsT0FBSyxFQUFFLE1BQU0sRUFBRTtDQUNoQixFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQzs7O0FBR2QsSUFBTSxRQUFRLEdBQUcsTUFBTSxDQUFDO0FBQ3RCLE1BQUksRUFBRSxNQUFNLEVBQUU7QUFDZCxNQUFJLEVBQUUsTUFBTSxFQUFFO0FBQ2QsVUFBUSxFQUFFLE1BQU0sRUFBRTtDQUNuQixFQUFFLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7OztBQUd6QixNQUFNLENBQUMsT0FBTyxHQUFHO1NBQU0sTUFBTSxDQUFDO0FBQzFCLFNBQUssRUFBRSxJQUFJLEVBQUU7QUFDYixPQUFHLEVBQUUsSUFBSSxFQUFFO0FBQ1gsV0FBTyxFQUFFLE1BQU0sRUFBRTtBQUNqQixVQUFNLEVBQUUsTUFBTSxFQUFFO0FBQ2hCLHFCQUFpQixFQUFFLE1BQU0sRUFBRTtBQUMzQixjQUFVLEVBQUUsTUFBTSxFQUFFO0FBQ3BCLFlBQVEsRUFBRSxRQUFRO0FBQ2xCLGFBQVMsRUFBRSxPQUFPLENBQUMsUUFBUSxDQUFDO0dBQzdCLEVBQUUsQ0FDRCxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxtQkFBbUIsRUFBRSxZQUFZLEVBQUUsV0FBVyxDQUMxRSxDQUFDO0NBQUEsQ0FBQyIsImZpbGUiOiJ1c2FnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuLy8gVXNhZ2Ugc2NoZW1hXG5cbmNvbnN0IHNjaGVtYSA9IHJlcXVpcmUoJ2FiYWN1cy1zY2hlbWEnKTtcblxuY29uc3Qgc3RyaW5nID0gc2NoZW1hLnR5cGVzLnN0cmluZztcbmNvbnN0IG51bWJlciA9IHNjaGVtYS50eXBlcy5udW1iZXI7XG5jb25zdCB0aW1lID0gc2NoZW1hLnR5cGVzLnRpbWU7XG5cbmNvbnN0IGVudW1UeXBlID0gc2NoZW1hLnR5cGVzLmVudW1UeXBlO1xuY29uc3Qgb2JqZWN0ID0gc2NoZW1hLnR5cGVzLm9iamVjdDtcbmNvbnN0IGFycmF5T2YgPSBzY2hlbWEudHlwZXMuYXJyYXlPZjtcblxuLy8gQ29uc3VtZXIgc2NoZW1hXG5jb25zdCBjb25zdW1lciA9IG9iamVjdCh7XG4gIHR5cGU6IGVudW1UeXBlKFxuICAgIFsnY2xvdWRfZm91bmRyeV9hcHBsaWNhdGlvbicsICdleHRlcm5hbCddLCAnY2xvdWRfZm91bmRyeV9hcHBsaWNhdGlvbicpLFxuICB2YWx1ZTogc3RyaW5nKClcbn0sIFsndmFsdWUnXSk7XG5cbi8vIFJlc291cmNlIHNjaGVtYVxuY29uc3QgcmVzb3VyY2UgPSBvYmplY3Qoe1xuICBuYW1lOiBzdHJpbmcoKSxcbiAgdW5pdDogc3RyaW5nKCksXG4gIHF1YW50aXR5OiBudW1iZXIoKVxufSwgWyd1bml0JywgJ3F1YW50aXR5J10pO1xuXG4vLyBFeHBvcnQgb3VyIHB1YmxpYyBmdW5jdGlvbnNcbm1vZHVsZS5leHBvcnRzID0gKCkgPT4gb2JqZWN0KHtcbiAgICBzdGFydDogdGltZSgpLFxuICAgIGVuZDogdGltZSgpLFxuICAgIHBsYW5faWQ6IHN0cmluZygpLFxuICAgIHJlZ2lvbjogc3RyaW5nKCksXG4gICAgb3JnYW5pemF0aW9uX2d1aWQ6IHN0cmluZygpLFxuICAgIHNwYWNlX2d1aWQ6IHN0cmluZygpLFxuICAgIGNvbnN1bWVyOiBjb25zdW1lcixcbiAgICByZXNvdXJjZXM6IGFycmF5T2YocmVzb3VyY2UpXG4gIH0sIFtcbiAgICAnc3RhcnQnLCAnZW5kJywgJ3BsYW5faWQnLCAnb3JnYW5pemF0aW9uX2d1aWQnLCAnc3BhY2VfZ3VpZCcsICdyZXNvdXJjZXMnXG4gIF0pO1xuXG4iXX0=