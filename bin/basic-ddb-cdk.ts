#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { BasicDdbCdkStack } from '../lib/basic-ddb-cdk-stack';

const app = new cdk.App();
new BasicDdbCdkStack(app, 'BasicDdbCdkStack', {});