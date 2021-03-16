import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as ObjectDetection from '../lib/object_detection-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new ObjectDetection.ObjectDetectionStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
