#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { ObjectDetectionStack } from '../lib/object_detection-stack';

const app = new cdk.App();
new ObjectDetectionStack(app, 'ObjectDetectionStack');
