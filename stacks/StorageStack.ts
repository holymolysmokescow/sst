import { StackContext, Bucket } from 'sst/constructs';

export function StorageStack({ stack }: StackContext) {
  // Create the S3 bucket
  const bucket = new Bucket(stack, 'Uploads');

  return { bucket };
}
